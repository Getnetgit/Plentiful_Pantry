const router = require('express').Router();
const { User,Grocery} = require('../../models');

// Get and Post

// Get all grocery the user have to Homepage 
router.get('/', async (req, res) => {
    try {
        const groceryData = await Grocery.findAll({
            include: [{ model: User }],
        });

        // show something on insomnia
        res.status(200).json(groceryData);


    } catch (err) {
        res.status(500).json(err);
    }
});

// Pick one grocery from the user
router.get('/:id', async(req, res) => {
    try {
      const groceryData = await Grocery.findOne({
        where: [{ id: req.params.id }],
      },
      {
        include: [{
            model: Grocery,
            attributes: ['id','grocery_name','category','Qauntity_min', 'avilableQauntity', 'date_updated'],
        }],
      });
      // show something on insomnia
      res.status(200).json(groceryData);

      const oneGrocery = groceryData.get({plain: true});
      res.render('grocery', { oneGrocery, loggedIn: req.session.loggedIn });

    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
  try {

    const newGrocery = await Grocery.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // show something on insomnia
    res.status(200).json(newGrocery);


  } catch (err) {
    res.status(400).json(err);
  }
});

// Destroy one grocery from 
router.delete('/:id', async (req, res) => {
  try {
    const groceryData = await Grocery.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!groceryData) {
      res.status(404).json({ message: 'No grocery found with this id!' });
      return;
    }
    // show something on insomnia
    res.status(200).json(groceryData);


  } catch (err) {
    res.status(500).json(err);
  }
});
// update grocery one grocery from 
router.put('/:id', async (req, res) => {
  try {
    const groceryData = await Grocery.update(
      {
         quantity_min: req.body.quantity_min,
         quantity_avilable: req.body.quantity_avilable,
      },
      {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!groceryData) {
      res.status(404).json({ message: 'No grocery found with this id!' });
      return;
    }
    // show something on insomnia
    res.status(200).json(groceryData);


  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;