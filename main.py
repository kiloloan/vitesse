def on_pin_pressed_p0():
    global t0
    basic.clear_screen()
    t0 = input.running_time()
    basic.show_leds("""
        # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
    """)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_pin_pressed_p1():
    global t1, duree, duree_en_seconde, vitesse
    t1 = input.running_time()
    basic.show_icon(IconNames.YES)
    duree = t1 - t0
    duree_en_seconde = duree * 1000
    vitesse = 3.6 * (distance / duree_en_seconde) #3,6 << coefficient m/s > hm/h
    for index in range(2):
        basic.show_number(vitesse)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

vitesse = 0
duree_en_seconde = 0
duree = 0
t1 = 0
t0 = 0
distance = 0
distance = 1
basic.show_leds("""
    . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
""")

def on_forever():
    pass
basic.forever(on_forever)
