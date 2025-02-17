import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SalesReports() {
  const reports = [
    { id: 1, eventName: 'Concert Night', totalTickets: 200, totalRevenue: '$5000' },
    { id: 2, eventName: 'Amusement Park Day', totalTickets: 150, totalRevenue: '$3000' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Flex Ticket - Sales Reports</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8 text-blue-700">Sales Reports</h1>

        {/* Filters */}
        <div className="flex justify-between mb-4">
          <input
            type="date"
            className="p-2 border rounded"
            placeholder="Start Date"
          />
          <input
            type="date"
            className="p-2 border rounded"
            placeholder="End Date"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Apply Filters
          </button>
        </div>

        {/* Sales Table */}
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Event Name</th>
              <th className="p-2">Total Tickets Sold</th>
              <th className="p-2">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b">
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