import { supabase } from '$lib/supabase';

// Authentication functions
const signUp = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  return { user, error };
};

const signIn = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signIn({ email, password });
  return { user, error };
};

const signOut = async () => {
  await supabase.auth.signOut();
};

// Database functions
const getAllProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");
  return { data, error };
};

// Check the current authentication status
const checkAuthStatus = () => {
  const user = supabase.auth.user();
  return user;
};

// Database functions

// Add a new product
const addProduct = async (productData: any) => {
  const { data, error } = await supabase.from("products").upsert([productData]);
  return { data, error };
};

// Update an existing product
const updateProduct = async (productData: any, productId: number) => {
  const { data, error } = await supabase
    .from("products")
    .update(productData)
    .eq("product_id", productId);
  return { data, error };
};

// Delete a product
const deleteProduct = async (productId: number) => {
  const { data, error } = await supabase
    .from("products")
    .delete()
    .eq("product_id", productId);
  return { data, error };
};

// Export all functions
export {
  signUp,
  signIn,
  signOut,
  checkAuthStatus,
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};