using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Interfaces;
using Service.Models;
using Service.Models.Models;
using Service.Models.Payload.Requests.Publisher;
using Service.Models.Payload.Responses;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublisherController : ControllerBase
    {
        private readonly IPublisherService _service;

        public PublisherController(IPublisherService service)
        {
            _service = service;
        }
        
        [HttpGet]
        public async Task<ActionResult<Result<PaginatedList<PublisherModel>>>> GetAuthors([FromQuery] GetPublisherRequest request)
        {
            var publishers = await _service.GetPublishers(request);
            return Ok(Result<PaginatedList<PublisherModel>>.Succeed(publishers));
        }
        
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Result<PublisherModel>>> GetAuthorById([FromRoute]int id)
        {
            var publisher = await _service.GetPublisherById(id);
            return Ok(Result<PublisherModel>.Succeed(publisher));
        }

        [HttpPost]
        public async Task<ActionResult<Result<PublisherModel>>> CreateMember([FromBody]CreatePublisherRequest request)
        {
            var publisher = await _service.CreatePublisher(request);
            return Ok(Result<PublisherModel>.Succeed(publisher));
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<Result<PublisherModel>>> UpdateMember([FromBody] UpdatePublisherRequest request, [FromRoute] int id)
        {
            var publisher = await _service.UpdatePublisher(id, request);
            return Ok(Result<PublisherModel>.Succeed(publisher));
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Result<PublisherModel>>> DeleteMember([FromRoute] int id)
        {
            var publisher = await _service.DeletePublisher(id);
            return Ok(Result<PublisherModel>.Succeed(publisher));
        }
    }
}
