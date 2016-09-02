class PlateCreateCtrl {

    error: string;

    static $inject = ['experiment', '$http', '$state'];

    constructor(public experiment: Experiment,
                private _$http,
                private _$state) {}

    createPlate(name: string, description: string) {
        (new PlateDAO(this.experiment.id)).create({
            experiment_id: this.experiment.id,
            name: name,
            description: description,
            acquisitions: []
        })
        .then((plate) => {
            this._$state.go('plate', {}, {
                reload: 'setup'
            });
        })
        .catch((error) => {
            this.error = error.message;
        });
    }

}

angular.module('tmaps.ui')
.controller('PlateCreateCtrl', PlateCreateCtrl);