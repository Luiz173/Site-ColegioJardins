using Microsoft.AspNetCore.Mvc;

namespace Site_Colégio.Controllers
{
    public class ContatoController : Controller
    {
        public IActionResult FaleConosco()
        {
            return View();
        }

        public IActionResult TrabalheConosco()
        {
            return View();
        }
    }
}
