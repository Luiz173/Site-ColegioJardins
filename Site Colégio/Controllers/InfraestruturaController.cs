using Microsoft.AspNetCore.Mvc;
using Site_Colégio.Models;
using System.Diagnostics;

namespace Site_Colégio.Controllers
{
    public class InfraestruturaController : Controller
    {
        public IActionResult PInfantil()
        {
            return View();
        }

        public IActionResult PFundamental1()
        {
            return View();
        }

        public IActionResult PFundamental2()
        {
            return View();
        }

        public IActionResult PMedio()
        {
            return View();
        }

        public IActionResult AreaVerde()
        {
            return View();
        }



    }
}
