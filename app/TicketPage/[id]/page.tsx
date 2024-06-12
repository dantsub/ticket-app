import EditTicketForm from "@/app/(components)/EditTicketForm"
import { Ticket } from "@/app/lib/definitions";

const getTicketById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateTicketData: Ticket;

export default async function TicketPage ({
  params
}: Readonly<{
  params: {id: string}
}>) {
  const EDITMODE = params.id === "new" ? false : true;
  if (EDITMODE) {
    const responseData = await getTicketById(params.id);
    updateTicketData = responseData.foundTicket;
  }
  return (
    <EditTicketForm ticket={updateTicketData} isEditable={EDITMODE} />
  )
}