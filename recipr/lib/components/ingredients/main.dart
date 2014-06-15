library recipr_ingredients;

import 'dart:async';
import 'dart:html';
import '../ingredient/main.dart';
import 'package:polymer/polymer.dart';

@CustomTag('recipr-ingredients')
class ReciprIngredients extends PolymerElement {
    @published String simpleLabel = '';
    @published String placeholder = '';

    List<ReciprIngredient> ingredients;

    ReciprIngredients.created() : super.created();

    @override
    void enteredView() {
        super.enteredView();
        ingredients = this.querySelectorAll('recipr-ingredient');

        if (ingredients.length == 0) {
            _addIngredient();
        }

        ingredients.forEach((ReciprIngredient ingredient){
            _addIngredientEvents(ingredient);
        });
    }


    void _addIngredientEvents(ingredient){
        ingredient.onCheck.listen((_) => _addIngredient());
        ingredient.onDelete.listen((_) => _deleteIngredient(ingredient));
    }

    void _addIngredient(){
        ReciprIngredient ingredient = new ReciprIngredient();
        ingredient.simpleLabel = simpleLabel;
        ingredient.placeholder = placeholder;
        _addIngredientEvents(ingredient);
        this.append(ingredient);
        ingredient.focusSketch();
    }

    void _deleteIngredient(ReciprIngredient element){
        ingredients = this.querySelectorAll('recipr-ingredient');
        if(ingredients.length == 0){
            _addIngredient();
        }
    }
}
