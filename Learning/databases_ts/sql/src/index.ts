// postgresql://test_owner:km7Fo6ZnLVjH@ep-nameless-mouse-a5co88zw-pooler.us-east-2.aws.neon.tech/test?sslmode=require

import { Client } from 'pg'
 
// Async function to fetch user data from the database given an email
async function getUser(email: string) {
  const client = new Client({
    connectionString: "postgresql://test_owner:km7Fo6ZnLVjH@ep-nameless-mouse-a5co88zw-pooler.us-east-2.aws.neon.tech/test?sslmode=require"
  });
    

  try {
    await client.connect();
    const query = 'SELECT * FROM members WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getUser('anjan@example.com').catch(console.error);