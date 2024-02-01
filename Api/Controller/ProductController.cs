using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly IProductOperation _IproductOperation;
    public ProductController(IProductOperation IproductOperation)
    {
        _IproductOperation = IproductOperation;
    }

    [HttpGet("GetProducts")]
    public IActionResult GetProducts()
    {
        try
        {
            return Ok(_IproductOperation.GetProducts());
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

    }

    [HttpPost("PostProduct")]
    [Consumes("application/json")]
    public IActionResult PostProduct([FromBody]Product product)
    {
        try
        {
            _IproductOperation.PostProduct(product);
            return Ok("Product Has Been Added Successfully.");
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("GetProductById/{id}")]
    public IActionResult GetProductById(int id)
    {
        try
        {
            int deletedId = _IproductOperation.DeleteProduct(id);
            if (deletedId == 0)
            {
                return NotFound("Id Cannot be found");
            }
            else
            {

                return Ok("Record with id : " + id + " Has been deleted successfuly");
            }
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPut("PutProduct")]
    public IActionResult PutProduct([FromBody] Product product)
    {
        try
        {
            bool isUpdated = _IproductOperation.PutProduct(product);
            if (isUpdated)
            {
                return Ok("Record Updated Succesfully");
            }
            else
            {
                return NotFound("Could not Completed the action");
            }
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

    }

    [HttpGet("GetProductByIdView/{id}")]
    public IActionResult GetProductByIdView(int id)
    {
        try
        {
            var getProduct = _IproductOperation.GetProductById(id);
            return Ok(getProduct);  
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}