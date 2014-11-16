part of recipr;

class Ingredient {
  String quantity = "";
  String unit = "";
  String name = "";

  static String regex = r"^([\d.,\/]*)(\s*([^\W]*)(\s*(.*)))?";
  static RegExp regexp = new RegExp(regex, caseSensitive: false);
  static bool isValidString(String string) => regexp.hasMatch(string);

  Ingredient();

  Ingredient.fromString(String string){
    if(regexp.hasMatch(string)){
      Match match = regexp.firstMatch(string);

      if(match.group(1) != null){
        quantity = match.group(1).trim();
      }

      if(match.group(3) != null){
        unit = match.group(3).trim();
      }

      if(match.group(5) != null){
        name = match.group(5).trim();
      }

      if(name.isEmpty && unit.isEmpty){
        quantity = "";
        name = string.trim();
      } else if(name.isEmpty && unit.isNotEmpty){
        name = unit;
        unit = '';
      }
    }
  }

  Ingredient.fromMap(Map data){
    quantity = data['quantity'];
    unit = data['unit'];
    name = data['name'];
  }

  Map toJson() => {
    'quantity': quantity,
    'unit': unit,
    'name': name
  };
}
