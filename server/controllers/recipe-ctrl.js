const Recipe = require('../models/recipe-model');

createRecipe = (req, res) => {
    const body = req.body;
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a recipe',
        }) 
    }

    const recipe = new Recipe(body);
    
    if (!recipe) {
        return res.status(400).json({ success: false, error: err });
    }

    recipe.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Recipe Created!',
            }) 
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Recipe Not Created!',
            })
        })
}

updateRecipe = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a recipe to update',
        })
    }

    Recipe.findOne({ _id: req.params.id }, (err,recipe) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        recipe.name = body.name;
        recipe.ingredients = body.ingredients
        recipe.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Recipe updated!',
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'Recipe not updated!',
                })
            })
    })
}

deleteRecipe = async(req, res) => {
    await Recipe.findOneAndDelete({ _iq: req.params.id }, (err, recipe) => {
        if (err) { return res.status(400).json({ success: false, error: err })}
    
        if (!recipe) {
            return res.status(404).json({ success: false, error: 'Recipe not found' });
        }

        return res.status(200).json({ success: true, data: recipe })
    }).catch( err => console.log(err) )
} 

getRecipeById = async (req, res) => {
    await Recipe.findOne({ _id: req.params.id }, (err, recipe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err})
        } 

        if (!recipe) {
            return res.status(400).json({ success: false, error: 'Recipe not found' })
        }
        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getRecipes = async (req, res) => {
    await Recipe.find({}, (err, recipes) => {
        if (err) { return res.status(400).json({ success: false, error: err }) } 
        
        if (!recipes.length) {
            return res.status(404).json({ success: false, error: 'Movie not found' })
        }

        return res.status(200).json({ success: true, data: recipes })
    }).catch(err => console.log(err))
}

module.exports = {
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipes,
    getRecipeById
}