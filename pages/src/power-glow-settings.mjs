import * as common from '/pages/src/common.mjs';

common.settingsStore.setDefault({
	zone1: 0,
	zone2: 100,
	zone3: 200,
	zone4: 300,
	zone5: 400,
	zone6: 500,
	zone7: 600,
	color1: '#ff0000',
	color2: '#ffa500',
	color3: '#ffff00',
	color4: '#008000',
	color5: '#0000ff',
	color6: '#4b0082',
	color7: '#ee82ee',
	color8: '#82004b',
});

export const glowSettings = common.settingsStore.get();

console.log(glowSettings);

export async function main() {
	common.initInteractionListeners();
	common.subscribe('athlete/watching', updateGlow);

	document.querySelector("#zone1").innerText = glowSettings.zone1;
	document.querySelector("#zone2").innerText = glowSettings.zone2;
	document.querySelector("#zone3").innerText = glowSettings.zone3;
	document.querySelector("#zone4").innerText = glowSettings.zone4;
	document.querySelector("#zone5").innerText = glowSettings.zone5;
	document.querySelector("#zone6").innerText = glowSettings.zone6;
	document.querySelector("#zone7").innerText = glowSettings.zone7;

	document.querySelector("#color1").style.backgroundColor = glowSettings.color1;
	document.querySelector("#color2").style.backgroundColor = glowSettings.color2;
	document.querySelector("#color3").style.backgroundColor = glowSettings.color3;
	document.querySelector("#color4").style.backgroundColor = glowSettings.color4;
	document.querySelector("#color5").style.backgroundColor = glowSettings.color5;
	document.querySelector("#color6").style.backgroundColor = glowSettings.color6;
	document.querySelector("#color7").style.backgroundColor = glowSettings.color7;
	document.querySelector("#color8").style.backgroundColor = glowSettings.color8;
}

export function subscribeWatching(fn) {
	common.subscribe('athlete/watching', fn);
}

export async function settingsMain() {
	common.initInteractionListeners();
	await common.initSettingsForm('form')();
}
