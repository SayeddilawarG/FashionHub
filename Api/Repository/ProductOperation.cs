public class ProductOperation : IProductOperation
{
    private readonly DbProductContext _dbContext;
    public ProductOperation(DbProductContext dbContext)
    {
        _dbContext = dbContext;
    }

    public List<Product> GetProducts()
    {
        try
        {
            return _dbContext.Products.ToList();
        }
        catch (Exception)
        {
            throw;
        }
    }
    public void PostProduct(Product product)
    {
        try
        {
            _dbContext.Products.Add(product);
            _dbContext.SaveChanges();
        }
        catch (Exception)
        {
            throw;
        }
    }

    public int DeleteProduct(int id)
    {
        try
        {
            var deleteProduct = _dbContext.Products.FirstOrDefault(prodcutId => prodcutId.Id == id);
            if (deleteProduct != null)
            {
                _dbContext.Products.Remove(deleteProduct);
                _dbContext.SaveChanges();
                return id;
            }
            else
            {
                return 0;
            }
        }
        catch (Exception)
        {
            throw;
        }

    }
    public bool PutProduct(Product product)
    {
        try
        {
            bool isUpdated = false;
            var productUpdate = _dbContext.Products.FirstOrDefault(productId => productId.Id == product.Id);
            if (productUpdate != null)
            {
                productUpdate.Name = product.Name;
                productUpdate.Description = product.Description;
                productUpdate.Prize = product.Prize;
                _dbContext.Products.Update(productUpdate);
                _dbContext.SaveChanges();
                isUpdated = true;
                return isUpdated;
            }
            else
            {
                return isUpdated;
            }
        }
        catch (Exception)
        {
            throw;
        }
    }

    public Product? GetProductById(int id)
    {
        try
        {
            var getProduct = _dbContext.Products.FirstOrDefault(prodcutId => prodcutId.Id == id);
            if (getProduct != null)
            {
               return getProduct;
            }
            else
            {
                return null;
            }
        }
        catch (Exception)
        {
            throw;
        }

    }
}