using Microsoft.AspNetCore.Mvc;
using Site_Colégio.Models;
using System.Diagnostics;

namespace Site_Colégio.Controllers
{
    public class QuemSomosController : Controller
    {
        public IActionResult NossaHistoria()
        {
            return View();
        }
    }
}
