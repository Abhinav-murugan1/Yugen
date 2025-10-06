import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
  salePrice?: number;
}

const Admin = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Premium Hoodie",
      price: 120,
      description: "Limited edition hoodie",
      image: "/placeholder.svg",
      category: "Apparel"
    }
  ]);

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
    isNew: false,
    isOnSale: false,
    salePrice: ""
  });

  const handleAddProduct = () => {
    if (!formData.name || !formData.price) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description,
      image: formData.image || "/placeholder.svg",
      category: formData.category,
      isNew: formData.isNew,
      isOnSale: formData.isOnSale,
      salePrice: formData.salePrice ? parseFloat(formData.salePrice) : undefined
    };

    setProducts([...products, newProduct]);
    setFormData({ name: "", price: "", description: "", image: "", category: "", isNew: false, isOnSale: false, salePrice: "" });
    toast({
      title: "Success",
      description: "Product added successfully"
    });
  };

  const handleUpdateProduct = () => {
    if (!editingProduct) return;

    setProducts(products.map(p => 
      p.id === editingProduct.id 
        ? { 
            ...editingProduct, 
            ...formData, 
            price: parseFloat(formData.price),
            salePrice: formData.salePrice ? parseFloat(formData.salePrice) : undefined
          }
        : p
    ));
    setEditingProduct(null);
    setFormData({ name: "", price: "", description: "", image: "", category: "", isNew: false, isOnSale: false, salePrice: "" });
    toast({
      title: "Success",
      description: "Product updated successfully"
    });
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    toast({
      title: "Success",
      description: "Product deleted successfully"
    });
  };

  const startEditing = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      description: product.description,
      image: product.image,
      category: product.category,
      isNew: product.isNew || false,
      isOnSale: product.isOnSale || false,
      salePrice: product.salePrice?.toString() || ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

          <Tabs defaultValue="products" className="w-full">
            <TabsList>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="add">Add Product</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>
                            {product.isOnSale && product.salePrice ? (
                              <>
                                <span className="line-through text-muted-foreground mr-2">${product.price}</span>
                                <span className="text-primary font-bold">${product.salePrice}</span>
                              </>
                            ) : (
                              `$${product.price}`
                            )}
                          </CardDescription>
                        </div>
                        <div className="flex gap-1">
                          {product.isNew && <Badge variant="secondary">New</Badge>}
                          {product.isOnSale && <Badge variant="destructive">Sale</Badge>}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => startEditing(product)}
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="add" className="mt-6">
              <Card className="max-w-2xl">
                <CardHeader>
                  <CardTitle>{editingProduct ? "Edit Product" : "Add New Product"}</CardTitle>
                  <CardDescription>
                    {editingProduct ? "Update product details" : "Fill in the product information"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Product Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Premium Hoodie"
                    />
                  </div>

                  <div>
                    <Label htmlFor="price">Price *</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="120"
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="isNew"
                        checked={formData.isNew}
                        onCheckedChange={(checked) => setFormData({ ...formData, isNew: checked })}
                      />
                      <Label htmlFor="isNew">New Product</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="isOnSale"
                        checked={formData.isOnSale}
                        onCheckedChange={(checked) => setFormData({ ...formData, isOnSale: checked })}
                      />
                      <Label htmlFor="isOnSale">On Sale</Label>
                    </div>
                  </div>

                  {formData.isOnSale && (
                    <div>
                      <Label htmlFor="salePrice">Sale Price</Label>
                      <Input
                        id="salePrice"
                        type="number"
                        value={formData.salePrice}
                        onChange={(e) => setFormData({ ...formData, salePrice: e.target.value })}
                        placeholder="99"
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="Apparel"
                    />
                  </div>

                  <div>
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      id="image"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="/path/to/image.jpg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Product description..."
                      rows={4}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={editingProduct ? handleUpdateProduct : handleAddProduct}>
                      {editingProduct ? (
                        <>
                          <Edit className="h-4 w-4 mr-2" />
                          Update Product
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4 mr-2" />
                          Add Product
                        </>
                      )}
                    </Button>
                    {editingProduct && (
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setEditingProduct(null);
                          setFormData({ name: "", price: "", description: "", image: "", category: "", isNew: false, isOnSale: false, salePrice: "" });
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
