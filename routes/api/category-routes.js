const router = require('express').Router();
const { Category, Product } = require('../../models');


// Get ALL categories
router.get('/', (req, res) => {
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: [
        {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
    ]
})
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Get ONE category (search by ID)
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
        id: req.params.id
    },
    attributes: ['id', 'category_name'],
    include: [
        {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
    ]
})
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'This category does not exist' });
            return;
        }
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    // does NOT need an ID because ID will automatically be applied
    // all it needs is the category name
    Category.create({
        category_name: req.body.category_name
    })
        .then(dbCategoryData => res.json(dbCategoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    // Exactly like GET ONE route, just switch out "findONE" with "update"
    Category.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'This category does not exist' });
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
