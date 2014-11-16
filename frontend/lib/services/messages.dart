part of recipr;

@Injectable()
class Messages {
  RootScope rootScope;

  Messages(this.rootScope);

  void alert(String message){
    rootScope.broadcast("globalAlert", message);
  }
}