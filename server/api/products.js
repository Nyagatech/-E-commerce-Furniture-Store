export default defineEventHandler((event) => {
  const products = [
    {
      id: 1,
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
      name: 'Modern Sofa',
      description: 'A comfortable sofa for your living room.',
      price: 499.99,
      category: 'Living Room',
    },
    {
      id: 2,
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
      name: 'Wooden Dining Table',
      description: 'A sturdy dining table for family meals.',
      price: 299.99,
      category: 'Dining Room',
    },
    {
      id: 3,
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
      name: 'Office Desk',
      description: 'A spacious desk for your home office.',
      price: 199.99,
      category: 'Office',
    },
    {
      id: 4,
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
      name: 'Queen Size Bed',
      description: 'A comfortable queen size bed for a good nights rest.',
      price: 699.99,
      category: 'Bedroom',
    },
    {
      id: 5,
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
      name: 'Kitchen Island',
      description: 'A kitchen island for added counter space.',
      price: 399.99,
      category: 'Kitchen',
    },
    {
      id: 6,
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
      name: 'Outdoor Patio Set',
      description: 'A patio set for outdoor relaxation.',
      price: 599.99,
      category: 'Outdoor',
    },
    {
      id: 7,
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp',
      name: 'Kitchen Cabinet',
      description: 'A cabinet for added kitchen storage.',
      price: 299.99,
      category: 'Kitchen',
    }
  ];

  return products;
});