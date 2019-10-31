using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SPA.Models;

namespace SPA.Controllers
{
    public class ShoppingListController : ApiController
    {
        private List<ShoppingList> shoppingLists = new List<ShoppingList>
        {
            new ShoppingList {
                Id = 1,
                Name = "Groceries",
                ShopItems = new List<ShopItem>()
                {
                    new ShopItem() { Id = 1,Name = "Milk"},
                    new ShopItem() { Id = 1,Name = "Vegetables"},
                }
            },

            new ShoppingList
            {
                Id = 2,
                Name = "Hardware",
                ShopItems = new List<ShopItem>()
                {
                    new ShopItem() { Id = 1,Name = "PC"},
                    new ShopItem() { Id = 2,Name = "Keyboard"}
                }
            }
        };

        // GET: api/ShoppingList
        public IHttpActionResult Get()
        {
            return Ok(shoppingLists);
        }

        // GET: api/ShoppingList/5
        public IHttpActionResult Get(int id)
        {
            ShoppingList shoppingList = shoppingLists.FirstOrDefault(s => s.Id == id);
            if (shoppingList == null)
            {
                return NotFound();
            }
            return Ok(shoppingList);
        }

        // POST: api/ShoppingList
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/ShoppingList/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ShoppingList/5
        public void Delete(int id)
        {
        }
    }
}
