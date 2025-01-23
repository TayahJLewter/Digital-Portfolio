const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);

    // Insert data into the Supabase table
    const { error } = await supabase
      .from("form_submissions")
      .insert([
        {
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          inquirytype: data.inquirytype,
          inquirydesc: data.inquirydesc,
          files: data.files || null, // Optional
        },
      ]);

    if (error) {
      console.error("Error inserting data:", error);
      return { statusCode: 500, body: "Failed to save submission" };
    }

    return { statusCode: 200, body: "Form submission successful!" };
  } catch (error) {
    console.error("Error processing request:", error);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};
