/*
Isaac Newton has forgotten his laws of physics and needs your help to animate an object on his game.

He must use the Second Law of Motion that states, 
"when the forces acting on an object are unbalanced, the object will accelerate."

This acceleration is dependent upon the force that acts upon the object and the object's mass.

So he wants to know what the acceleration of that object is, depending on its properties:

* mass of xx
* Δv of xx
* Δt of xx
* force of xx
* distance xx
* time xx
*/

function getAcceleration(o) {
  if (typeof o.f === 'number' && typeof o.m === 'number') {
    return o.m === 0 ? "impossible" : o.f / o.m;
  }

  if (typeof o["Δv"] === 'number' && typeof o["Δt"] === 'number') {
    return o["Δt"] === 0 ? "impossible" : o["Δv"] / o["Δt"];
  }

  if (typeof o.d === 'number' && typeof o.t === 'number') {
    return o.t === 0 ? "impossible" : (2 * o.d) / (o.t * o.t);
  }

  return "impossible";
}