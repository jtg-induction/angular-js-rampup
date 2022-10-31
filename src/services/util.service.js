import { encode, decode } from "string-encode-decode";

export default {
  name: "utilService",
  service: [
    "localStorageService",
    function (localStorageService) {
      this.setUser = (user) => {
        localStorageService.set("user", encode(JSON.stringify(user)));
      };
      this.getUser = () => {
        const decodedUserData = decode(localStorageService.get("user")) || "{}";
        return JSON.parse(decodedUserData);
      };
      this.deleteUser = () => {
        localStorageService.remove("user");
        localStorageService.clearAll();
      };
    },
  ],
};
