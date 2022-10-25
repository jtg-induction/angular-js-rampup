export default {
    name: 'utilService',
    service: ['localStorageService', function (localStorageService) {

        this.setUser = (user) => {
            localStorageService.set('user', user);
        }
        this.getUser = () => {
            return localStorageService.get("user");
        }
        this.deleteUser = () => {
            localStorageService.remove('user');
            localStorageService.clearAll();
        }
    }]
}
