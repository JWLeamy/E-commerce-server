const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Get ALL tags
router.get('/', (req, res) => {
  Tag.findAll({
    attributes: ['id', 'tag_name'],
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

// get ONE tag (search by ID)
router.get('/:id', (req, res) => {
  let tagid = req.params.id
  Tag.findOne({
    where: { id: tagid },
    include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
  })

  .then(data => {
    if(!data) {
      res.status(404).json({message: 'This tag does not exist'})
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
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
