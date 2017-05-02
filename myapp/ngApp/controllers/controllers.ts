namespace myapp.Controllers {

    export class HomeController {
        public pounds

        constructor(private weightService) {
           this.pounds = this.weightService.list();
        }
        }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
