<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use stdClass;

class SchemaController extends Controller
{
    /**
     * Schema name for IMDB's top 250 database connection.
     */
    public const SCHEMA_IMDB = "imdb";
    public const LABEL_IMBD = "IMDB TOP 250";

    /**
     * Schema name for Elmasri's Company database connection.
     */
    public const SCHEMA_COMPANY = "company";
    public const LABEL_COMPANY = "COMPANY (Elmasri e Navathe)";

    /**
     * Schema used for the tutorial.
     */
    public const TUTORIAL_SCHEMA = self::SCHEMA_IMDB;

    /**
     * Array with the list of schemas.
     *
     * @var array
     */
    private $databases = [];

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->databases[self::SCHEMA_IMDB] = self::LABEL_IMBD;
        $this->databases[self::SCHEMA_COMPANY] = self::LABEL_COMPANY;
    }

    /**
     * Formats a schema mapping for rendering.
     *
     * @param $schema
     * @return stdClass
     */
    function formatSchema($schema)
    {
        $formattedSchema = new stdClass();

        foreach ($schema as $attribute)
        {
            if (!property_exists($formattedSchema, $attribute->table_name))
            {
                $table = new stdClass();
                $table->name = $attribute->table_name;
                $table->columns = [];
                $formattedSchema->{$attribute->table_name} = $table;
            }
            else
                $table = $formattedSchema->{$attribute->table_name};

            $column = $attribute;
            unset($column->table_name);

            array_push($table->columns, $column);
        }
        return $formattedSchema;
    }

    /**
     * Lists all schemas currently listed in this class.
     * To add more, after inserting the data in the database,
     * include the description both in the config/database.php file and here.
     *
     * @return array
     */
    public function getSchemas()
    {
        $schemas = [];
        foreach ($this->databases as $name => $label)
        {
            $tables = DB::select(DB::raw("SELECT * FROM GetScheme(:database)"), ['database' => $name]);
            $schemas[$name] = new stdClass();
            $schemas[$name]->name = $name;
            $schemas[$name]->label = $label;
            $schemas[$name]->tables = $this->formatSchema($tables);
        }

        return $schemas;
    }

    /**
     * Return a schema by name.
     *
     * @param $schemaName
     * @return stdClass
     */
    public function getSchema($schemaName)
    {
        $tables = DB::select(DB::raw("SELECT * FROM GetScheme(:database)"), ['database' => $schemaName]);
        $schema = new stdClass();
        $schema->name = $schemaName;
        $schema->label = $this->databases[$schemaName];
        $schema->tables = $this->formatSchema($tables);

        return $schema;
    }

    /**
     * Retrieves all lessons for the tutorial in the database.
     *
     * @return array
     */
    public function getLessons()
    {
        $lessons = DB::select(DB::raw("SELECT * FROM lessons"));
        return $lessons;
    }

    /**
     * Execute query on a specific schema.
     *
     * @param $query
     * @param $schema
     * @param $limit
     * @param $offset
     * @return array
     */
    public function executeQuery($query, $schema, $limit, $offset)
    {

        try {
            $result = DB::connection($schema)->select(DB::raw($query));
            $count = count($result);
            $result = array_slice($result, $offset, $limit);
        } catch (Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
        return [
            'success' => true,
            'result' => $result,
            'count' => $count
        ];
    }

    /**
     * Render the 'tutorial' view.
     *
     * @return \Illuminate\View\View
     */
    public function tutorialView()
    {
        return view('tutorial', [
            'schema' => $this->getSchema(self::TUTORIAL_SCHEMA),
            'lessons' => $this->getLessons()
        ]);
    }

    /**
     * Render the 'praticando' view.
     *
     * @return \Illuminate\View\View
     */
    public function praticandoView()
    {
        return view('praticando', [
            'schemas' => $this->getSchemas()
        ]);
    }

    /**
     * Render the 'sqlook' view.
     *
     * @return \Illuminate\View\View
     */
    public function sqlookView()
    {
        return view('sqlook', [
            'schemas' => $this->getSchemas()
        ]);
    }

    /**
     * Return a response with the results of a query on a selected schema.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postQueryAjax(Request $request)
    {
        $query = $request->input('query');
        $schema = $request->input('schema');
        $limit = $request->input('limit');
        $page = $request->input('page');

        $offset = $limit * ($page - 1);

        $response = $this->executeQuery($query, $schema, $limit, $offset);

        return response()->json($response);
    }
}