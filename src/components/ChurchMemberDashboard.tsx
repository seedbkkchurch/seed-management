"use client"

import { useState } from "react"
import {
  Calendar,
  ChevronDown,
  Facebook,
  Gift,
  Home,
  Instagram,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

export default function ChurchMemberDashboard() {
  const [activeTab, setActiveTab] = useState("attendance")

  // Sample data for charts
  const attendanceData = [
    { month: "Jan", Present: 4, Absent: 0, Late: 0 },
    { month: "Feb", Present: 3, Absent: 1, Late: 0 },
    { month: "Mar", Present: 2, Absent: 1, Late: 1 },
    { month: "Apr", Present: 4, Absent: 0, Late: 0 },
    { month: "May", Present: 3, Absent: 0, Late: 1 },
    { month: "Jun", Present: 2, Absent: 2, Late: 0 },
  ]

  const spiritualGiftsData = [
    { subject: "Teaching", A: 8, fullMark: 10 },
    { subject: "Compassion", A: 7, fullMark: 10 },
    { subject: "Leadership", A: 9, fullMark: 10 },
    { subject: "Prophecy", A: 6, fullMark: 10 },
    { subject: "Service", A: 8, fullMark: 10 },
    { subject: "Wisdom", A: 7, fullMark: 10 },
  ]

  const quietTimeData = [
    { date: "2023-06-01", status: "Done", note: "Matthew 5:1-12" },
    { date: "2023-06-02", status: "Done", note: "Matthew 5:13-20" },
    { date: "2023-06-03", status: "Missed", note: "" },
    { date: "2023-06-04", status: "Done", note: "Matthew 5:21-30" },
    { date: "2023-06-05", status: "Done", note: "Matthew 5:31-42" },
    { date: "2023-06-06", status: "Missed", note: "" },
    { date: "2023-06-07", status: "Done", note: "Matthew 6:1-15" },
  ]

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-blue-600" />
            <h1 className="text-lg font-semibold md:text-xl">Grace Community Church</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium hover:bg-gray-100">
              Edit Profile
            </button>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-full rounded-lg border bg-white shadow lg:col-span-2">
              <div className="flex flex-row items-start gap-4 p-6">
                <div className="relative h-20 w-20 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    width={80}
                    height={80}
                    alt="Profile"
                    className="object-cover"
                  />
                </div>
                <div className="grid gap-1">
                  <h2 className="text-2xl font-semibold">Sarah Johnson</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">@sarahj</span>
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                      Active Member
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Phone className="h-3.5 w-3.5" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" />
                      <span>sarah.johnson@example.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h3 className="text-sm font-medium">Personal Information</h3>
                    <dl className="grid gap-1 text-sm mt-2">
                      <div className="grid grid-cols-2">
                        <dt className="text-gray-500">Gender:</dt>
                        <dd>Female</dd>
                      </div>
                      <div className="grid grid-cols-2">
                        <dt className="text-gray-500">Age:</dt>
                        <dd>32</dd>
                      </div>
                      <div className="grid grid-cols-2">
                        <dt className="text-gray-500">Birthday:</dt>
                        <dd>May 15, 1991</dd>
                      </div>
                      <div className="grid grid-cols-2">
                        <dt className="text-gray-500">Blood Group:</dt>
                        <dd>O+</dd>
                      </div>
                      <div className="grid grid-cols-2">
                        <dt className="text-gray-500">Personality:</dt>
                        <dd>ENFJ</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Church Information</h3>
                    <dl className="grid gap-1 text-sm mt-2">
                      <div className="grid grid-cols-2">
                        <dt className="text-gray-500">Group Care:</dt>
                        <dd>Faithful Servants</dd>
                      </div>
                      <div className="grid grid-cols-2">
                        <dt className="text-gray-500">Mentor:</dt>
                        <dd>Pastor Michael Lee</dd>
                      </div>
                      <div className="grid grid-cols-2">
                        <dt className="text-gray-500">Class:</dt>
                        <dd>Bible Study 101</dd>
                      </div>
                      <div className="grid grid-cols-2">
                        <dt className="text-gray-500">Is Timote:</dt>
                        <dd>Yes</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Professional & Address</h3>
                    <dl className="grid gap-1 text-sm mt-2">
                      <div className="grid grid-cols-2">
                        <dt className="text-gray-500">Job:</dt>
                        <dd>Marketing Manager</dd>
                      </div>
                      <div className="grid grid-cols-2">
                        <dt className="text-gray-500">Address:</dt>
                        <dd className="flex items-start gap-1">
                          <MapPin className="h-3.5 w-3.5 mt-0.5" />
                          <span>123 Faith Street, Grace City, GC 12345</span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="border-t p-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-1">
                    <Facebook className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">@sarahjohnson</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Twitter className="h-4 w-4 text-blue-400" />
                    <span className="text-sm">@sarah_j</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Instagram className="h-4 w-4 text-pink-600" />
                    <span className="text-sm">@sarahj_faith</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-full rounded-lg border bg-white shadow lg:col-span-1">
              <div className="flex flex-row items-center p-6">
                <div className="grid gap-1">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <Gift className="h-4 w-4 text-blue-600" />
                    Spiritual Gifts
                  </h2>
                  <p className="text-sm text-gray-500">Member's spiritual gift assessment</p>
                </div>
                <button className="ml-auto rounded-full p-1 hover:bg-gray-100">
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <div className="px-6 pb-6">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={spiritualGiftsData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 10]} />
                      <Radar name="Sarah" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                      <RechartsLegend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white shadow">
            <div className="border-b">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("attendance")}
                  className={`px-4 py-2 text-sm font-medium ${activeTab === "attendance" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Attendance
                </button>
                <button
                  onClick={() => setActiveTab("quiet-time")}
                  className={`px-4 py-2 text-sm font-medium ${activeTab === "quiet-time" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Quiet Time
                </button>
                <button
                  onClick={() => setActiveTab("preferences")}
                  className={`px-4 py-2 text-sm font-medium ${activeTab === "preferences" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Preferences
                </button>
              </div>
            </div>

            {activeTab === "attendance" && (
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Attendance History
                  </h2>
                  <p className="text-sm text-gray-500">Monthly attendance record for the past 6 months</p>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={attendanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <RechartsTooltip />
                      <RechartsLegend />
                      <Bar dataKey="Present" fill="#4ade80" />
                      <Bar dataKey="Absent" fill="#f87171" />
                      <Bar dataKey="Late" fill="#facc15" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-lg bg-gray-100 p-3">
                    <div className="text-2xl font-bold text-green-500">16</div>
                    <div className="text-xs text-gray-500">Present</div>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-3">
                    <div className="text-2xl font-bold text-red-500">4</div>
                    <div className="text-xs text-gray-500">Absent</div>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-3">
                    <div className="text-2xl font-bold text-yellow-500">2</div>
                    <div className="text-xs text-gray-500">Late</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "quiet-time" && (
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <LineChart className="h-5 w-5 text-blue-600" />
                    Quiet Time Log
                  </h2>
                  <p className="text-sm text-gray-500">Daily devotion records for the past week</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-2 text-left font-medium text-gray-500">Date</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-500">Scripture</th>
                        <th className="px-4 py-2 text-right font-medium text-gray-500">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quietTimeData.map((entry) => (
                        <tr key={entry.date} className="border-b">
                          <td className="px-4 py-2">{new Date(entry.date).toLocaleDateString()}</td>
                          <td className="px-4 py-2">{entry.note || "-"}</td>
                          <td className="px-4 py-2 text-right">
                            <span
                              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                entry.status === "Done" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {entry.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-lg bg-gray-100 p-3">
                    <div className="text-2xl font-bold text-green-500">5</div>
                    <div className="text-xs text-gray-500">Completed</div>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-3">
                    <div className="text-2xl font-bold text-red-500">2</div>
                    <div className="text-xs text-gray-500">Missed</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Food Preferences</h2>
                  <p className="text-sm text-gray-500">Member's favorite cuisines and dietary preferences</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Favorite Cuisines</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium">Italian</span>
                      <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium">Korean</span>
                      <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium">Mediterranean</span>
                      <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium">Mexican</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Favorite Dishes</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium">Pasta</span>
                      <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium">
                        Bibimbap
                      </span>
                      <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium">
                        Greek Salad
                      </span>
                      <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium">Tacos</span>
                      <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium">Pizza</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Dietary Restrictions</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                        Gluten Sensitive
                      </span>
                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                        No Peanuts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

