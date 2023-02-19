const menu_items = [  
  {
    itemGroup: 'Burgers',
    itemImg: 'https://images.unsplash.com/photo-1606787750928-8e1b0e1b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    itemID: '1',
    itemName: 'Chicken Burger',
    itemPrices: '$2.00',
    itemDescription: 'A savory rich chicken burger covered in a creamy sauce. The cream sauce is made in house',    
    itemAddOns: [      
      { category: 'Sizes', required : true,
        choices: [
          { name: 'Small', price: '$2.00', },         
          { name: 'Medium', price: '$2.50' },          
          { name: 'Large', price: '$3.00' },        
        ],
      },
      {
        category: 'Sauces', required : false,
        choices: [
          { name: 'Mayonnaise', price: '$0.50' },
          { name: 'Ketchup', price: '$0.50' },
          { name: 'Barbecue', price: '$1.00' },
        ],
      },
      {
        category: 'Toppings', required: false,
        choices: [
          { name: 'Lettuce', price: '$0.50' },
          { name: 'Tomatoes', price: '$0.50' },
          { name: 'Pickles', price: '$0.50' },
        ],
      },
    ],
  },
  // More Items...
];
  
  export default function ItemCards({}) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {menu_items.map((item) => (
          <div
            key={item.itemID}
            className="relative flex items-center space-x-3 rounded-xl border border-gray-300 bg-white px-6 py-5  hover:bg-sisal-50"
          >
            {/*
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={item.imageUrl} alt="" />
            </div>
        */}
            <div className="min-w-0 min-h-24 h-24 flex-1">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="absolute top-4 text-sm font-poppins font-semibold text-gray-900">{item.itemName}</p>
                <p className=" absolute top-9 pt-1 line-clamp-2 font-poppins text-sm text-gray-500">{item.itemDescription}</p>
                <p className="absolute bottom-4 truncate font-medium font-poppins text-sm text-gray-900">{item.itemPrices}</p>

              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
