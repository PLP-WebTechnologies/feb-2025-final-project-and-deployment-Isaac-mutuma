interface TeamMemberProps {
  member: {
    name: string
    role: string
    bio: string
    image: string
  }
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-emerald-600 font-medium text-sm mb-3">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </div>
  )
}
