interface RequestBody {
   email: string;
   firstName: string;
   lastName: string;
   applicantType: string;
}

interface ResponseBody {
   message: string;
}

export async function POST(req: Request): Promise<Response> {
   try {
      const { email, firstName, lastName, applicantType }: RequestBody = await req.json();
      const API_KEY: string | undefined = process.env.EMAIL_OCTOPUS_API_KEY;
      const LIST_ID: string | undefined = process.env.EMAIL_OCTOPUS_LIST_ID;

      const response: Response = await fetch(`https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            api_key: API_KEY,
            email_address: email,
            status: "SUBSCRIBED",
            fields: {
               FirstName: firstName,
               LastName: lastName,
               ApplicantType: applicantType,
            }
         }),
      });

      if (!response.ok) {
         const errorResponse: ResponseBody = { message: "Failed to subscribe" };
         return new Response(JSON.stringify(errorResponse), { status: 400 });
      }

      const successResponse: ResponseBody = { message: "Subscription successful!" };
      return new Response(JSON.stringify(successResponse), { status: 200 });
   } catch (error) {
      const errorResponse: ResponseBody = { message: "Internal Server Error" };
      return new Response(JSON.stringify(errorResponse), { status: 500 });
   }
}
