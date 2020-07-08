using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class EmployeeController : ApiController
    {
        private EmployeeDBEntities db = new EmployeeDBEntities();

        // GET: api/Employee
        public IQueryable<tblEmployee> GettblEmployees()
        {
            return db.tblEmployees;
        }

        // GET: api/Employee/5
        [ResponseType(typeof(tblEmployee))]
        public IHttpActionResult GettblEmployee(int id)
        {
            tblEmployee tblEmployee = db.tblEmployees.Find(id);
            if (tblEmployee == null)
            {
                return NotFound();
            }

            return Ok(tblEmployee);
        }

        // PUT: api/Employee/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PuttblEmployee(int id, tblEmployee tblEmployee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblEmployee.EmployeeID)
            {
                return BadRequest();
            }

            db.Entry(tblEmployee).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tblEmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Employee
        [ResponseType(typeof(tblEmployee))]
        public IHttpActionResult PosttblEmployee(tblEmployee tblEmployee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tblEmployees.Add(tblEmployee);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tblEmployee.EmployeeID }, tblEmployee);
        }

        // DELETE: api/Employee/5
        [ResponseType(typeof(tblEmployee))]
        public IHttpActionResult DeletetblEmployee(int id)
        {
            tblEmployee tblEmployee = db.tblEmployees.Find(id);
            if (tblEmployee == null)
            {
                return NotFound();
            }

            db.tblEmployees.Remove(tblEmployee);
            db.SaveChanges();

            return Ok(tblEmployee);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblEmployeeExists(int id)
        {
            return db.tblEmployees.Count(e => e.EmployeeID == id) > 0;
        }
    }
}