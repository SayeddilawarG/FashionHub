
#pragma warning disable CA1050 // Declare types in namespaces
public interface IProductOperation
#pragma warning restore CA1050 // Declare types in namespaces
{
    List<Product> GetProducts();
    void PostProduct(Product product);
    bool PutProduct(Product product);
    int DeleteProduct(int id);
    Product GetProductById(int id);
}