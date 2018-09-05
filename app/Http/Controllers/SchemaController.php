<?php

namespace App\Http\Controllers;

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
     * Lists all schemas currently listed in this class.
     * To add more, after inserting the data in the database,
     * include the description both in the config/database.php file and here.
     *
     * @return array
     */
    public function getSchemas()
    {
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

        $schemas = [];
        foreach ($this->databases as $name => $label){
            $schema = DB::select(DB::raw("SELECT * FROM GetScheme(:database)"), ['database' => $name]);
            $schemas[$name] = new stdClass();
            $schemas[$name]->label = $label;
            $schemas[$name]->tables = formatSchema($schema);
        }

        return $schemas;
    }

    /**
     * Render the 'praticando' view.
     *
     * @return \Illuminate\View\View
     */
    public function praticandoView(){
        return view('praticando', [
            'schemas' => $this->getSchemas()
        ]);
    }

    /**
     * Render the 'sq-look' view.
     *
     * @return \Illuminate\View\View
     */
    public function sqlookView(){
        return view('sq-look', [
            'schemas' => $this->getSchemas()
        ]);
    }
}