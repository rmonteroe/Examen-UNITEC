using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using ApiUnitec.Models;

namespace ApiUnitec.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AgendaUnitecsController : ApiController
    {
        private Unitec_TestEntities db = new Unitec_TestEntities();
        private List<AgendaUnitec> lstAgenda = new List<AgendaUnitec>();

        // GET: api/AgendaUnitecs
        public HttpResponseMessage GetAgendaUnitec()
        {
            try
            {
                lstAgenda = db.AgendaUnitec.ToList();
                if (lstAgenda != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, lstAgenda, "application/json");
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Agenda Vacia");
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        // GET: api/AgendaUnitecs/5
        [ResponseType(typeof(AgendaUnitec))]
        public HttpResponseMessage GetAgendaUnitec(int id)
        {
            try
            {
                AgendaUnitec Contacto = db.AgendaUnitec.Find(id);
                if (Contacto != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, Contacto, "application/json");
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Contacto no encontrado");
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }

        }

        [EnableCors(origins: "*", headers: "*", methods: "GET, POST, PUT, DELETE, OPTIONS")]
        [HttpPost]
        // PUT: api/AgendaUnitecs/5
        [ResponseType(typeof(void))]
        public HttpResponseMessage PutAgendaUnitec(AgendaUnitec agendaUnitec)
        {
            try
            {
                    db.Set<AgendaUnitec>().Add(agendaUnitec);
                    db.SaveChanges();


                return Request.CreateResponse(HttpStatusCode.OK, "El Contacto ha sido modificado");

            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }


        // DELETE: api/AgendaUnitecs/5
        [ResponseType(typeof(AgendaUnitec))]
        public HttpResponseMessage DeleteAgendaUnitec(int id)
        {
            try
            {
                AgendaUnitec Contacto = db.AgendaUnitec.Find(id);
                if (Contacto != null)
                {
                    db.AgendaUnitec.Remove(Contacto);
                    db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "El contacto ha sido modificado");
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Contacto no encontrado");
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AgendaUnitecExists(int id)
        {
            return db.AgendaUnitec.Count(e => e.IdAgenda == id) > 0;
        }
    }
}