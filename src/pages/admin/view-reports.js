import Head from 'next/head';
import Navbar from '../components/NavbarAdmin';
import Footer from '../components/FooterAdmin';

export default function ViewReports() {
  const reports = [
    { eventName: 'Concert Night', totalTickets: 200, totalRevenue: '$5000' },
    { eventName: 'Amusement Park Day', totalTickets: 150, totalRevenue: '$3000' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - View Reports</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8 text-blue-700">View Reports</h1>

        {/* Reports Table */}
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Event Name</th>
              <th className="p-2">Total Tickets Sold</th>
              <th className="p-2">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 text-center">{report.eventName}</td>
                <td className="p-2 text-center">{report.totalTickets}</td>
                <td className="p-2 text-center">{report.totalRevenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}