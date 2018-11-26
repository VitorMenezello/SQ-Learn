app.controller('SQLFormatController', function ($scope, $http)
{
    /* Config */
    $scope.loading = false;
    $scope.query = '';
    $scope.result = '';

    $scope.removeComments = false;

    $scope.wordOptions = [
        {
            label: 'Sem mudanças',
            value: null
        },
        {
            label: 'Caixa alta',
            value: 'upper'
        },
        {
            label: 'Caixa baixa',
            value: 'lower'
        },
        {
            label: 'Primeira letra maiúscula',
            value: 'capitalize'
        }
    ];

    $scope.keyword = 'upper';
    $scope.identifier = null;

    $scope.indentation = 2;

    /* Format Query */
    $scope.formatQuery = function ()
    {
        let data = {
            sql: $scope.query,
            reindent: 1,
            indent_width: $scope.indentation
        };
        if ($scope.keyword) {
            data.keyword_case = $scope.keyword;
        }
        if ($scope.identifier) {
            data.identifier_case = $scope.identifier;
        }

        $scope.loading = true;

        $http.post('http://sqlformat.org/api/v1/format',
            data,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                transformRequest: function(obj) {
                    let str = [];
                    for (let p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
            })
            .then(
                function (response)
                {
                    $scope.loading = false;
                    console.log(response);
                    $scope.result = response.data.result;
                });

    };

    $scope.test_one = function (config) {

    };

    $scope.test_two = function (config) {
        $http({
            url: 'http://sqlformat.org/api/v1/format',
            method: 'POST',
            data: config
        }).success(function (data, status) {
            console.log(status, data);
        });
    }
});