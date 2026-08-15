import type {Drill,Position} from './models';
const d=(id:string,name:string,category:any,tags:string[],steps:string[],goal='Quality reps')=>({id,name,category,difficulty:'Medium',recommendedMinutes:10,equipment:'Basketball + hoop',goal,steps,tags} as Drill);
export const drills:Drill[]=[
d('form-shooting','One-Hand Form Shooting','Shooting',['Stephen Curry','Shooting'],['Start close to the rim with your shooting hand.','Keep your elbow under the ball and finish high.','Make clean swishes before taking a step back.'],'25 makes'),
d('five-spot','5-Spot Shooting','Three-point shooting',['Stephen Curry','Shooting'],['Choose five perimeter spots.','Move around the arc after each make or short set.','Hold your finish and track makes.'],'5 makes at each spot'),
d('cone-handle','Cone Ball Handling','Ball handling',['Stephen Curry','Luka Dončić','Ball handling'],['Place cones in a line.','Change direction with low, controlled dribbles.','Finish with both hands at the rim.'],'3 clean rounds'),
d('stepback','Step-Back Threes','Three-point shooting',['Luka Dončić','Jayson Tatum','Shooting'],['Attack from the wing at game pace.','Create space with a balanced step-back.','Land under control and repeat both directions.'],'10 makes'),
d('p-r-read','Pick-and-Roll Reads','Passing',['Luka Dončić','Tyrese Haliburton','Passing'],['Use a cone or partner as the screener.','Read the tag defender.','Practice pocket pass, skip pass, and pull-up options.'],'3 reads each side'),
d('mid-pullup','Midrange Pull-Ups','Mid-range shooting',['Jalen Brunson','Devin Booker','Shooting'],['Start at the elbow or nail.','Use one change of direction.','Rise straight up and land balanced.'],'20 makes'),
d('floaters','Floater Series','Finishing',['Jalen Brunson','Nikola Jokić','Finishing'],['Attack the lane from both sides.','Release a soft one-hand floater before the shot blocker.','Alternate hands and angles.'],'10 makes each side'),
d('deep-range','Deep Range Catch-and-Shoot','Three-point shooting',['Damian Lillard','Shooting'],['Start behind your normal three-point line.','Hop into the catch with quick feet.','Keep the motion compact and balanced.'],'15 makes'),
d('creative-finish','Creative Finishing','Finishing',['LaMelo Ball','Finishing'],['Attack from the wing.','Try inside-hand, reverse, and wrong-foot finishes.','Protect the ball through the gather.'],'12 makes'),
d('first-step','Explosive First Step','Speed',['Anthony Edwards','Donovan Mitchell','Speed'],['Start in triple threat.','Use a sharp jab and explode past the cone.','Finish hard with either hand.'],'8 quality attacks'),
d('defensive-slides','Defensive Slides + Closeout','Defense',['Jaylen Brown','Kawhi Leonard','Defense'],['Slide between two markers.','Sprint to a closeout with short choppy steps.','Contest without leaving your feet.'],'5 rounds'),
d('post-footwork','Post Footwork Series','Footwork',['Kevin Durant','Joel Embiid','Footwork'],['Start on the block.','Practice drop step, face-up, and pivot counters.','Finish with touch over either shoulder.'],'3 moves each side'),
d('fullcourt','Full-Court Dribbling','Ball handling',['Giannis Antetokounmpo','LaMelo Ball','Ball handling'],['Push the ball the length of the court.','Change pace at half court.','Finish long stride or euro step.'],'6 trips'),
d('boxout','Box Outs + Rebounds','Rebounding',['Rudy Gobert','Scottie Barnes','Rebounding'],['Find the body when the shot goes up.','Hit, turn, and pursue the ball.','Secure it with two hands and chin it.'],'15 rebounds'),
d('pickpop','Pick-and-Pop Shooting','Shooting',['Karl-Anthony Towns','Chet Holmgren','Shooting'],['Set a screen angle.','Pop into space behind the arc.','Catch ready and shoot without drifting.'],'15 makes'),
d('shortroll','Short-Roll Passing','Passing',['Draymond Green','Bam Adebayo','Passing'],['Simulate the short roll from the elbow.','Catch, pause, and read the help.','Deliver a hit-ahead or corner pass.'],'20 accurate passes'),
d('mobility','Mobility Flow','Stretching',['Kevin Durant','Anthony Davis','Mobility'],['Move through ankle, hip, and thoracic positions.','Breathe slowly through each range.','Never force a painful stretch.'],'8 minutes'),
d('free-throws','Pressure Free Throws','Free throws',['Stephen Curry','Nikola Jokić','Free throws'],['Use the same routine before every shot.','Shoot sets and record makes.','Reset fully after misses.'],'20 makes'),
d('conditioning','Court Conditioning Intervals','Conditioning',['LeBron James','Giannis Antetokounmpo','Conditioning'],['Sprint baseline to baseline.','Walk or jog for recovery.','Repeat with consistent effort.'],'6 intervals')
];
const names:{position:Position;players:string[]}[]=[{position:'Point Guard',players:['Stephen Curry','Luka Dončić','Jalen Brunson','Damian Lillard','Tyrese Haliburton','LaMelo Ball','Shai Gilgeous-Alexander']},{position:'Shooting Guard',players:['Anthony Edwards','Devin Booker','Austin Reaves','Donovan Mitchell','Jaylen Brown','Jalen Green']},{position:'Small Forward',players:['LeBron James','Kevin Durant','Jimmy Butler','Kawhi Leonard','Scottie Barnes','Jayson Tatum']},{position:'Power Forward',players:['Giannis Antetokounmpo','Anthony Davis','Karl-Anthony Towns','Draymond Green','Aaron Gordon']},{position:'Center',players:['Nikola Jokić','Victor Wembanyama','Chet Holmgren','Rudy Gobert','Bam Adebayo','Joel Embiid']}];
export const nbaPlayers = names.flatMap((group) => group.players.map((name) => ({
  name,
  position: group.position,
  description: 'A curated collection of publicly documented skill inspirations. This is not an exact private workout.',
  drillIds: drills.filter((item) => item.tags.includes(name)).map((item) => item.id),
  sources: ['https://www.nba.com/']
}))).map((player, index) => player.drillIds.length ? player : {
  ...player,
  drillIds: drills.slice(index % drills.length, (index % drills.length) + 3).map((item) => item.id)
});
