import { supabase } from "$lib/supabase";
// Authentication functions

// User registration
const register = async (email: string, password: string, first_name: string, last_name: string, role: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  // After successfully signing up, insert user details into the profiles table
  if (!error) {
    // Use async/await to get the user information
    const { data: user, error: userError } = await supabase.auth.getUser();
    
    if (userError) {
      // Handle the error retrieving user information, if needed.
      return { data, error: userError };
    }
    
    const { data: insertData, error: insertError } = await supabase
      .from('profiles')
      .upsert([
        {
          id: user.user.id,
          first_name,
          last_name,
          role,
        },
      ], { onConflict: ['id'] });
    return { data: { user, insertData }, error: insertError };
  }
  
  return { data, error };
};



// User login
const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

// User logout
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Database functions

// Get User Profile
const getUserProfile = async (uuid: unknown ) => {
  const { data: profiles, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', uuid)
    .single();
  return { data: profiles, error };
};

// Get all products
const getAllProducts = async () => {
  const { data, error } = await supabase.from('products').select('*');
  return { data, error };
};

// Get a product by ID
const getProductById = async (productId: unknown) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('product_id', productId)
    .single();
  return { data, error };
};

// Add a new product
const addProduct = async (product: unknown) => {
  const { data, error } = await supabase.from('products').upsert([product]);
  return { data, error };
};

// Update a product
const updateProduct = async (productId: unknown, updates: unknown) => {
  const { data, error } = await supabase
    .from('products')
    .update(updates)
    .eq('product_id', productId);
  return { data, error };
};

// Delete a product
const deleteProduct = async (productId: number) => {
  const { data, error } = await supabase
    .from('products')
    .delete()
    .eq('product_id', productId);
  return { data, error };
};

// Export all functions
export {
  register,
  signIn,
  signOut,
  getUserProfile,
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
