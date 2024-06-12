import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Nav() {
  return(
    <header className="w-full bg-nav">
      <nav className="w-4/5 mx-auto flex justify-between items-center py-4">
        <div className="flex gap-x-4 items-center">
          <Link href="/">
            <FontAwesomeIcon icon={faHome} className="icon mr-2" />
            Home
          </Link>
          <Link href="/TicketPage/new">
            <FontAwesomeIcon icon={faTicket} className="icon mr-2" />
            New Ticket
          </Link>
        </div>
        <p>
          jake.lower17@gmail.com
        </p>
      </nav>
    </header>
  )
}