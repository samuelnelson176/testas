exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      supabaseUrl:  process.env.SUPABASE_URL,
      supabaseKey:  process.env.SUPABASE_ANON_KEY,
    }),
  };
};
