---
title: switch resources
layout: resources.liquid
staus: valid
---
{% resourcesContainer "hacking the switch" %}{% renderTemplate "md" %}

[Is My Switch Patched?](https://ismyswitchpatched.com/){target='_blank'}
: tool that lets you check if your switch is unpatched and thus vulnerable to the fusee-gelee exploit that lets you soft mod your switch.

[Switch Hacking Is Easy](https://web.archive.org/web/20240526190756/https://rentry.org/SwitchhackingIsEasy){target='_blank'}
: the guide i used to set up custom firmware on my switch. has information on hacking both unpatched switches and those with a modchip installed. site is currently down due to a copyright strike from nintendo, but the links lead to an archived version of the site. i recommend starting with formatting your sd card into FAT32, which they have a guide on [here](https://web.archive.org/web/20240526190756/https://rentry.org/FAT32FormatSD/#pc-method){target='_blank'}. be sure to read everything in the 'getting started' section before moving onto the 'CFW guides' section. i personally recommend setting up atmosphere with EmuNAND to decrease the likelihood of getting banned, as well as setting up [exosphere and dns mitm](https://web.archive.org/web/20240526190756/https://rentry.org/ExosphereDNSMITM){target='_blank'} afterwards. be sure to check out the other guides in the homebrew section for more information on setting up useful homebrew functions like [backing up your save files](https://web.archive.org/web/20240526190756/https://rentry.org/BackupSaveFiles){target='_blank'}, [installing custom themes](https://web.archive.org/web/20240526190756/https://rentry.org/InstallingThemes){target='_blank'}, and [setting up tesla overlay](https://web.archive.org/web/20240526190756/https://rentry.org/TeslaOverlay){target='_blank'}.

[Switch Hacking Is (still) Easy](https://gitea.com/KudbiOdd/easy-switch-hacking-shise/wiki){target='_blank'}
: another, more up to date guide on hacking the switch. the original guide has been copyright striked by nintendo, so the above links to a miror of the original guide.

[Homebrew App Store](https://github.com/fortheusers/hb-appstore){target='_blank'}
: browse and download homebrew apps straight from your switch. also lets you easily see what apps have updates available.

[NX Activity Log](https://github.com/zdm65477730/NX-Activity-Log){target='_blank'}
: shows detailed play activity. the fork linked above works on switch firmware 16+.

[PPSSPP](https://www.ppsspp.org/legacybuilds/){target='_blank'}
: standalone playstation portable emulator for the switch. the above the link takes you to the official ppsspp website that has builds v1.9, v1.9.3, and 1.17, which is also available on the hb app store.

[Duckstation](https://github.com/RSDuck/duckstation/releases/tag/prerelease-2){target='_blank'}
: standalone playstation 1 emulator for the switch. i find that it generally has better performance than the pcsx rearmed core in retroarch.

[melonDS](https://gbatemp.net/threads/melonds-for-switch-continuation-part-2.671101/){target='_blank'}
: a standalone nintendo DS emulator. a continuation of RSDuck's original work porting melonDS to the switch, Gheovgos's port adds retroachievement support and performance improvements.

[Switchroot](https://wiki.switchroot.org/wiki){target='_blank'}
: install android on your switch. you can find the guide to installing android 11 [here](https://wiki.switchroot.org/wiki/android/11-r-setup-guide){target='_blank'}.

[Online Payload Injector](https://ineo6.github.io/web-cfw-loader/){target='_blank'}
: an online alternative to [TegraRcmGUI](https://github.com/eliboa/TegraRcmGUI){target='_blank'} that i use to boot into hekate from linux or android.

{% endrenderTemplate %}{% endresourcesContainer %}

{% resourcesContainer "emulating the switch" %}{% renderTemplate "md" %}

[Yuzu](https://github.com/yuzu-mirror){target='_blank'}
: switch emulator for windows and linux. while the original project has been taken down, the above link takes you to a github repository with an archive of builds before they were taken down. once installed follow [this guide](https://github.com/Abd-007/Switch-Emulators-Guide/blob/main/Yuzu.md){target='_blank'} to get it set up.

[Ryujinx](https://rentry.co/ryujinx){target='_blank'}
: switch emulator for windows, mac, and linux. you can read a setup guide [here](https://github.com/Abd-007/Switch-Emulators-Guide/blob/main/Ryujinx.md){target='_blank'}.

{% endrenderTemplate %}{% endresourcesContainer %}

{% resourcesContainer "switch games" %}{% renderTemplate "md" %}

- [Nxbrew](https://nxbrew.net/){target='_blank'}
- [nswgame](https://nswgame.com/category/switch/){target='_blank'}
- [ziperto](https://www.ziperto.com/){target='_blank'}

{% endrenderTemplate %}{% endresourcesContainer %}