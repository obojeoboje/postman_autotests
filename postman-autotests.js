// Автотесты для постмана

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("Obi-Wan Kenobi");
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

pm.test("The Starship name is Sentinel-class landing craft", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Sentinel-class landing craft");