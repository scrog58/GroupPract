namespace myapp.Services {

  class WeightService {
    public WEIGTH_RESOURCE = this.$resource('api/v1/weight/:id');

    constructor(private $resource) {}

    public list() {
      return this.WEIGTH_RESOURCE.query();
    }

    public save(weight) {
      return this.WEIGTH_RESOURCE.save(weight).$promise;
    }

    public get(id){
      return this.WEIGTH_RESOURCE.get({id: id});
    }

    public delete(id) {
      return this.WEIGTH_RESOURCE.delete(id).$promise;
    }

  }
  angular.module('myapp').service('weightService', WeightService);
    }
