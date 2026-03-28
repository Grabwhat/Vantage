import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { subjects, courses } from '../data/courses'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from './ui/card'
import { Badge } from './ui/badge'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
import { Clock, BookOpen } from 'lucide-react'

export function Subjects() {
  const [searchParams] = useSearchParams()
  const selectedSubjectParam = searchParams.get('subject')
  const [selectedSubject, setSelectedSubject] = useState(
    selectedSubjectParam || 'all',
  )

  const filteredCourses =
    selectedSubject === 'all'
      ? courses
      : courses.filter((course) => course.subjectId === selectedSubject)

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Psychology Specializations</h1>
          <p className="text-lg text-muted-foreground">
            Explore different branches of psychology and deepen your understanding of
            human behavior and mental processes
          </p>
        </div>

        <div className="mb-8 flex justify-center overflow-x-auto">
          <Tabs
            value={selectedSubject}
            onValueChange={setSelectedSubject}
            className="w-full max-w-6xl"
          >
            <TabsList className="grid w-full grid-cols-5 gap-2 p-2 bg-muted rounded-xl h-auto min-h-[60px]">
              <TabsTrigger
                value="all"
                className="text-center px-6 py-3 rounded-lg hover:bg-gray-200 hover:cursor-pointer h-auto whitespace-normal"
              >
                All
              </TabsTrigger>

              {subjects.map((subject) => (
                <TabsTrigger
                  key={subject.id}
                  value={subject.id}
                  className="px-6 py-3 rounded-lg hover:bg-gray-200 hover:cursor-pointer h-auto whitespace-normal"
                >
                  <span className="hidden sm:inline"> {subject.name} </span>
                  <span className="sm:hidden">
                    {subject.shortName ?? subject.name.split(' ')[0]}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {selectedSubject === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {subjects.map((subject) => {
              const subjectCourses = courses.filter(
                (course) => course.subjectId === subject.id,
              )
              return (
                <Card
                  key={subject.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedSubject(subject.id)}
                >
                  <CardContent className="p-6">
                    <div
                      className={`size-12 ${subject.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <div className="size-6 bg-white/30 rounded" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {subject.description}
                    </p>
                    <div className="text-sm text-muted-foreground">
                      {subjectCourses.length}{' '}
                      {subjectCourses.length === 1 ? 'course' : 'courses'}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {selectedSubject === 'all'
                ? 'All Courses'
                : `${subjects.find((s) => s.id === selectedSubject)?.name} Courses`}
            </h2>
            <div className="text-muted-foreground">
              {filteredCourses.length}{' '}
              {filteredCourses.length === 1 ? 'course' : 'courses'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => {
              const subject = subjects.find((s) => s.id === course.subjectId)
              const totalDuration = course.lessons.reduce((acc, lesson) => {
                const lessonMinutes = lesson.components.reduce((sum, component) => {
                  const minutes = parseInt(component.duration, 10)
                  return sum + (Number.isNaN(minutes) ? 0 : minutes)
                }, 0)
                return acc + lessonMinutes
              }, 0)

              return (
                <Link
                  key={course.id}
                  to={`/subjects/${course.subjectId}/${course.id}/overview`}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div
                          className={`size-10 ${subject?.color} rounded-lg flex items-center justify-center`}
                        >
                          <div className="size-5 bg-white/30 rounded" />
                        </div>
                        <Badge variant="secondary">{course.level}</Badge>
                      </div>
                      <CardTitle className="leading-snug">{course.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BookOpen className="size-4" />
                          <span>{course.lessons.length} lessons</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="size-4" />
                          <span>{totalDuration} min</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No courses found for this subject yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
