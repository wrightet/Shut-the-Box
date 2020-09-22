class Game
    def initialize
        @game_over = false
        # @tiles = [13]
        @tiles = [1,2,3,4,5,6,7,8,9]
        @dice1 = (1..6).to_a
        @dice2 = (1..6).to_a
    end

    def play
        until @game_over == true
            system("clear") || system("cls")
            roll1 = @dice1.sample
            roll2 = @dice2.sample
            roll_val = roll1 +  roll2
            p @tiles
            p "dice rolls: #{roll1}, #{roll2}"
            if game_finished?(roll1, roll2) == true 
                @game_over = true
                system("clear") || system("cls")
                p @tiles
                 p "dice rolls: #{roll1}, #{roll2}"
                p 'GAME OVER'
                puts "final score #{@tiles.sum}"
                break 
            end
            choose_tiles(roll_val)
           
            p @tiles
        
        end
    end

    def flip_tile(num)
        @tiles[@tiles.index(num)] = 0
    end

    def pick
        num = gets.chomp.to_i
    end
    def choose_tiles(roll_val)
        ans = 0
        tile = 0
        until ans == roll_val || tile == 2
            num = nil
            until @tiles.include?(num)
                num = pick()
            end
            ans += num
            flip_tile(num)
            tile += 1
        end
    end

    def game_finished?(roll1, roll2)
        return false if @tiles.include?(roll1) && @tiles.include?(roll2)
        return true if @tiles.all?{|el| el == 0}
        roll_val = roll1 + roll2
        i = 0
        while i < @tiles.length
            j = 0
            while j < @tiles.length
                if ((@tiles[i] + @tiles[j]) == roll_val) && i != j
                    return false
                end
                j += 1
            end
            i += 1
        end
        true
    end
end

g = Game.new
g.play