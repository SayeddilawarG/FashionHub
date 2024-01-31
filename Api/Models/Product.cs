using System.ComponentModel.DataAnnotations;

public class Product
{
    [Key]
    public int Id{get;set;}
    [Required(ErrorMessage ="Name Cannot be Empty")]
    public string? Name{get;set;}
    [Required(ErrorMessage ="Description Cannot be Empty")]
    public string? Description{get;set;}
    [Required(ErrorMessage ="Prize Cannot be Empty")]
    public decimal Prize{get;set;}

}