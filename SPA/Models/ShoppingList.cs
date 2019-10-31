using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPA.Models
{
    public class ShoppingList
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<ShopItem> ShopItems { get; set; }

        public ShoppingList()
        {
            ShopItems = new List<ShopItem>();
        }

    }

}