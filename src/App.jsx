import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Megaphone,
  Star,
  Users,
  Dumbbell,
  Target,
  UserCheck,
  GraduationCap,
  Heart,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl bg-white shadow-sm ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, className = "", variant = "default", onClick }) {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition";
  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
      : "bg-slate-900 text-white hover:bg-slate-800";
  return (
    <button type="button" onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}

const announcements = [
  "Bring water, goggles, mouthguard, and both sneakers and cleats.",
  "No walk-ups for clinics. RSVP by Thursday so fields and coaches can be confirmed.",
  "Players can submit wall ball videos directly inside the app.",
];

const programOptions = [
  {
    title: "Attend a Clinic",
    icon: ClipboardCheck,
    description: "Single-day skill sessions for players who want focused reps, coaching, and confidence-building.",
    details: [
      "Great for new and returning players",
      "Focus on stickwork, dodging, shooting, defense, and game IQ",
      "Players should bring stick, goggles, mouthguard, cleats, sneakers, and water",
    ],
    button: "View Clinic Details",
    link: "https://koalendar.com/e/sparkling-unicorns-clinic",
  },
  {
    title: "Book a Training Session",
    icon: Target,
    description: "Private or small-group training for players who want extra help outside of clinics and team practices.",
    details: [
      "$35 for 90 minutes",
      "Available for 1-on-1, small group, or position-specific sessions",
      "Focus can include shooting, dodging, stickwork, defense, goalie work, or confidence",
      "Coach Jose will confirm time, location, and training focus",
    ],
    button: "Book Training",
    link: "https://koalendar.com/e/sparkling-unicorns-training",
  },
  {
    title: "Reserve a Tryout Spot",
    icon: UserCheck,
    description: "Reserve a spot for a Sparkling Unicorns team, tournament, or evaluation opportunity.",
    details: [
      "Players must reserve ahead of time so numbers can be planned",
      "Tryouts may include stickwork, athletic movement, small-sided play, and coachability",
      "A reserved spot does not guarantee team placement",
    ],
    button: "Reserve Spot",
    link: "https://koalendar.com/e/sparkling-unicorns-tryouts",
  },
  {
    title: "College Counseling",
    icon: GraduationCap,
    description: "Guidance for student-athletes and families who want help understanding the college process.",
    details: [
      "$35 per hour",
      "Support with college planning, recruiting questions, emails, goals, and next steps",
      "Great for players and parents who want a clearer plan",
    ],
    button: "Book Counseling",
    link: "https://koalendar.com/e/sparkling-unicorns-clinic-2",
  },
];

function AboutSparklingUnicorns() {
  return (
    <section className="mt-6">
      <Card className="rounded-3xl border-0 bg-white/90 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 rounded-2xl bg-pink-100">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black">About Sparkling Unicorns</h2>
              <p className="text-sm text-slate-600">Girls lacrosse training for players in 2nd through 12th grade.</p>
            </div>
          </div>
          <p className="text-slate-700 mt-4 max-w-4xl">
            Sparkling Unicorns Lacrosse is built for girls who want to learn, compete, grow confidence, and have fun while getting better. Players can attend clinics, book training, reserve tryout spots, complete wall ball workouts, and get support with college counseling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="rounded-2xl bg-pink-50 p-4">
              <Users className="w-6 h-6 mb-2" />
              <h3 className="font-black">Beginner to Advanced</h3>
              <p className="text-sm text-slate-600 mt-1">Training options for new players, developing players, and serious athletes.</p>
            </div>
            <div className="rounded-2xl bg-purple-50 p-4">
              <Heart className="w-6 h-6 mb-2" />
              <h3 className="font-black">Confidence First</h3>
              <p className="text-sm text-slate-600 mt-1">Fun, positive coaching with accountability and real player development.</p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-4">
              <ShieldCheck className="w-6 h-6 mb-2" />
              <h3 className="font-black">Coach Jose Standard</h3>
              <p className="text-sm text-slate-600 mt-1">Show up, work hard, bring great energy, and earn everything.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function ProgramSignup() {
  return (
    <section className="mt-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
        <div>
          <h2 className="text-2xl font-black">Program Sign-Up</h2>
          <p className="text-sm text-slate-600 mt-1">Choose what you want to do next with Sparkling Unicorns Lacrosse.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {programOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Card key={option.title} className="border-0 bg-white/90">
              <CardContent className="p-5 flex flex-col h-full">
                <div className="p-3 rounded-2xl bg-pink-100 w-fit mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900">{option.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{option.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 flex-1">
                  {option.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="text-pink-500 font-black">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-5 w-full" onClick={() => option.link && window.open(option.link, "_blank")}>
                  {option.button}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function buildWallBallWorkout(grade, mood, time, focus, noWallMode, workoutStyle) {
  const gradeGroup = Number(grade) <= 5 ? "Youth" : Number(grade) <= 8 ? "Middle School" : "High School";

  const wallWorkouts = {
    Youth: [
      "Right hand quick sticks",
      "Left hand quick sticks",
      "Catch, cradle, throw",
      "Ground ball scoop into wall pass",
      "Two-hand cradle into wall pass",
      "Step to target and throw",
      "Catch across your face",
      "Catch, switch hands, throw",
      "High target passing",
      "Low target passing",
    ],
    "Middle School": [
      "Right hand quick sticks",
      "Left hand quick sticks",
      "Alternating hands",
      "Canadian right and left",
      "One-hand right",
      "One-hand left",
      "Catch, split dodge, throw",
      "Catch, roll dodge, throw",
      "Off-stick side catches",
      "Ground ball scoop into wall pass",
    ],
    "High School": [
      "Quick sticks both hands",
      "Off-stick side catches",
      "Cross-body catches",
      "Split dodge to throw",
      "Roll dodge to throw",
      "Fake high, throw low",
      "Behind-the-back right",
      "Behind-the-back left",
      "One-hand quick sticks",
      "Game-speed catch and release",
    ],
  };

  const noWallWorkouts = {
    Youth: [
      "Cradle right hand around cones",
      "Cradle left hand around cones",
      "Ground ball scoop and protect",
      "Toss and catch above head",
      "Toss, clap, catch",
      "Cone dodging with split dodge",
      "Cone dodging with roll dodge",
      "Partner passing if someone is available",
      "Sprint, scoop, protect",
      "Stick protection shadow drill",
    ],
    "Middle School": [
      "Stationary stick tricks",
      "One-hand cradle right",
      "One-hand cradle left",
      "Ground ball footwork",
      "Cone dodging with split dodge",
      "Toss, catch, switch hands",
      "Roll dodge around cone",
      "Face dodge around cone",
      "Sprint to ground ball pickup",
      "Stick protection with footwork",
    ],
    "High School": [
      "Dodging footwork series",
      "Roll dodge reps",
      "Split dodge reps",
      "Change-of-speed cradle",
      "Shooting footwork without shooting",
      "Ground ball to dodge combo",
      "Inside roll footwork",
      "Question mark dodge footwork",
      "Defensive approach and recover",
      "Game-speed cradle under control",
    ],
  };

  const focusAddOns = {
    Stickwork: ["Fast hands challenge", "Clean catches only"],
    "Weak Hand": ["Weak hand only round", "Weak hand finish challenge"],
    Dodging: ["Add a dodge before each rep", "Explode out of every dodge"],
    Shooting: ["Step-down footwork", "Catch loaded and ready to shoot"],
    Defense: ["Approach, breakdown, recover", "Stick up footwork"],
    "Ground Balls": ["Scoop through, do not stop", "Scoop, protect, accelerate"],
    Conditioning: ["Sprint after every set", "Fast feet between reps"],
    "Game IQ": ["Call out a game situation before each rep", "Scan before you pass or dodge"],
    Confidence: ["Make every rep loud and intentional", "End with your best reps"],
    "Stick Protection": ["Cradle away from pressure", "Add shoulder protection after each catch"],
  };

  const moodBoost = {
    Locked: "Go hard. You picked locked in, so no lazy reps today.",
    Tired: "Start steady. Build confidence first, then finish stronger than you started.",
    Nervous: "Keep it simple. Clean reps will calm you down.",
    Frustrated: "Use the workout to reset. Win one rep at a time.",
    Confident: "Challenge yourself. Push speed without losing control.",
    "Just Here": "Showing up counts, but now give Coach Jose honest effort.",
  };

  const repTargets = {
    "30 Minutes": "25 reps each",
    "60 Minutes": "50 reps each",
    "90 Minutes": "75 reps each",
  };

  const timeTargets = {
    "30 Minutes": "2 minutes each",
    "60 Minutes": "4 minutes each",
    "90 Minutes": "6 minutes each",
  };

  const target = workoutStyle === "Reps" ? repTargets[time] : timeTargets[time];
  const sourceList = noWallMode ? noWallWorkouts[gradeGroup] : wallWorkouts[gradeGroup];
  const selected = [...sourceList.slice(0, 8), ...focusAddOns[focus]].slice(0, 10);

  return {
    gradeGroup,
    message: moodBoost[mood],
    items: selected.map((item, index) => `${index + 1}. ${item} — ${target}`),
  };
}

function WallBallWorkout() {
  const [grade, setGrade] = useState("6");
  const [mood, setMood] = useState("Locked");
  const [time, setTime] = useState("30 Minutes");
  const [focus, setFocus] = useState("Stickwork");
  const [workoutStyle, setWorkoutStyle] = useState("Reps");
  const [noWallMode, setNoWallMode] = useState(false);
  const workout = buildWallBallWorkout(grade, mood, time, focus, noWallMode, workoutStyle);

  return (
    <section className="mt-6">
      <Card className="rounded-3xl border-0 overflow-hidden bg-white/90">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700 mb-3">
                <Dumbbell className="w-4 h-4" /> Wall Ball Workout
              </div>
              <h2 className="text-2xl font-black">Build My Workout</h2>
              <p className="text-sm text-slate-600 mt-2">
                Players answer a few questions, then the app creates a 10-exercise workout based on grade, mood, time, focus area, workout style, and whether they have access to a wall.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant={noWallMode ? "outline" : "default"} onClick={() => setNoWallMode(false)}>
                I Have a Wall
              </Button>
              <Button variant={noWallMode ? "default" : "outline"} onClick={() => setNoWallMode(true)}>
                I Don’t Have a Wall
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            <label className="space-y-2">
              <span className="text-sm font-bold text-slate-700">Grade</span>
              <select value={grade} onChange={(e) => setGrade(e.target.value)} className="w-full px-3 py-2 rounded-xl border bg-white text-sm">
                {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((gradeOption) => (
                  <option key={gradeOption} value={gradeOption}>
                    {gradeOption} Grade
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-bold text-slate-700">What mood are you in?</span>
              <select value={mood} onChange={(e) => setMood(e.target.value)} className="w-full px-3 py-2 rounded-xl border bg-white text-sm">
                <option>Locked</option>
                <option>Tired</option>
                <option>Nervous</option>
                <option>Frustrated</option>
                <option>Confident</option>
                <option>Just Here</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-bold text-slate-700">Time Available</span>
              <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-3 py-2 rounded-xl border bg-white text-sm">
                <option>30 Minutes</option>
                <option>60 Minutes</option>
                <option>90 Minutes</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-bold text-slate-700">Focus Area</span>
              <select value={focus} onChange={(e) => setFocus(e.target.value)} className="w-full px-3 py-2 rounded-xl border bg-white text-sm">
                <option>Stickwork</option>
                <option>Weak Hand</option>
                <option>Dodging</option>
                <option>Shooting</option>
                <option>Defense</option>
                <option>Ground Balls</option>
                <option>Conditioning</option>
                <option>Game IQ</option>
                <option>Confidence</option>
                <option>Stick Protection</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-bold text-slate-700">Workout Style</span>
              <select value={workoutStyle} onChange={(e) => setWorkoutStyle(e.target.value)} className="w-full px-3 py-2 rounded-xl border bg-white text-sm">
                <option>Reps</option>
                <option>Time</option>
              </select>
            </label>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="font-black text-lg">Your {noWallMode ? "No-Wall" : "Wall Ball"} Workout</h3>
                <p className="text-sm text-slate-600">
                  Grade Group: {workout.gradeGroup} • Focus: {focus} • Time: {time} • Style: {workoutStyle}
                </p>
              </div>
              <Button onClick={() => window.open("https://drive.google.com/drive/folders/1NDpVejGTbsDMtT7P0ktuWOH9v1oecKjb?usp=drive_link", "_blank")}>
                Submit Completed Workout
              </Button>
            </div>
            <p className="mt-4 rounded-xl bg-white p-3 text-sm font-semibold text-slate-700 border">{workout.message}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {workout.items.map((item) => (
                <div key={item} className="rounded-xl bg-white p-3 text-sm text-slate-700 border">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">Coach Jose rule: quality reps count. Sloppy reps do not. Record your final round and submit it.</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-sky-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-white/80 backdrop-blur p-6 sm:p-8 shadow-sm border border-white"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700 mb-4">
                <Star className="w-4 h-4" /> Sparkle Meets Swagger
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Sparkling Unicorns Lacrosse</h1>
              <p className="mt-3 text-slate-600 max-w-2xl">
                A team app for clinics, training, tryouts, wall ball workouts, college counseling, and player development.
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSds3IW56YHwKba1bH03IdToLJsyaQyyBwWal9gtfahoLrA0PA/viewform?usp=publish-editor", "_blank")}>
                Join Team
              </Button>
            </div>
          </div>
        </motion.div>

        <ProgramSignup />
        <AboutSparklingUnicorns />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <section className="lg:col-span-2 space-y-4">
            <WallBallWorkout />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black">Announcements</h2>
            <Card className="border-0">
              <CardContent className="p-5 space-y-4">
                {announcements.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="mt-1 rounded-full bg-purple-100 p-2 h-fit">
                      <Megaphone className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
