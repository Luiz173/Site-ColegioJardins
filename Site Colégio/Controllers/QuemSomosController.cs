﻿using Microsoft.AspNetCore.Mvc;
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

        public IActionResult Missao()
        {
            return View();
        }

        public IActionResult Proposta()
        {
            return View();
        }

        public IActionResult Parceiros()
        {
            return View();
        }

        public IActionResult Diferencial()
        {
            return View();
        }


    }
}
