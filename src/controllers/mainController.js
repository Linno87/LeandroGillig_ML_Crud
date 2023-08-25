const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		return res.render("index", {
			visited: products.filter(product => product.category ==="visited"),
			sale: products.filter(product => product.category ==="in-sale"),
			products,
			toThousand
		})
	},
	search: (req, res) => {
		const result = products.filter(product =>product.name.toLowerCase().includes(req.query.keyboards.toLowerCase()));
		return res.render("results",{
			result,
			toThousand
		})
	},
};

module.exports = controller;
