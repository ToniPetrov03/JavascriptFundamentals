function solve(radius, height) {
    const radius2 = radius * radius;
    const height2 = height * height;
    const volumeOfCone = Math.PI * radius2 * height / 3;
    const totalSurfaceAreaOfCone = Math.PI * (radius2 + radius * Math.sqrt(radius2 + height2));

    console.log(`volume = ${volumeOfCone.toFixed(4)}`);
    console.log(`area = ${totalSurfaceAreaOfCone.toFixed(4)}`);
}
