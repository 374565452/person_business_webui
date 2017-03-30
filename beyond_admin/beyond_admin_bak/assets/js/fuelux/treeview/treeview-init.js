var UITree = function () {

    return {
        //main function to initiate the module
        init: function () {

            var DataSourceTree = function (options) {
                this._data = options.data;
                this._delay = options.delay;
            };

            DataSourceTree.prototype = {

                data: function (options, callback) {
                    var self = this;

                    setTimeout(function () {
                        var data = $.extend(true, [], self._data);

                        callback({ data: data });
                        alert(callback);
                    }, this._delay)
                }
            };

            // INITIALIZING TREE
            var treeDataSource = new DataSourceTree({
                data: [
                    { name: 'Sales', type: 'folder', 'icon-class':'success', additionalParameters: { id: 'F1' } },
                    { name: 'Projects', type: 'folder', 'icon-class': 'success', additionalParameters: { id: 'F2' } },
                    { name: 'Reports', type: 'item', additionalParameters: { id: 'I1' } },
                    { name: 'Finance', type: 'item', additionalParameters: { id: 'I2' } }
                ],
                delay: 400
            });

            $('#MyTree').tree({
                dataSource: treeDataSource,
                multiSelect: true,
                loadingHTML: '<div class="tree-loading"><i class="fa fa-rotate-right fa-spin"></i></div>'
            });

        }

    };

}();